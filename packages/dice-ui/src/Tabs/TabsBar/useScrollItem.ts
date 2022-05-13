import { useCallback, useState, useRef } from 'react';
import times from 'lodash-es/times';
import type { LayoutChangeEvent } from 'react-native';
import useScrollTo from '../../hooks/useScrollTo';
import type { ScrollToSupportedViews } from '../../hooks/useScrollTo';

export interface ItemLayout {
  containerWidth: number;
  containerLeft: number;
  width: number;
  left: number;
}

interface ScrollItemProps {
  itemsCount: number;
}

interface ScrollItemResultProps<T extends ScrollToSupportedViews> {
  onItemLayout: (event: LayoutChangeEvent, index: number) => void;
  onItemContainerLayout: (event: LayoutChangeEvent, index: number) => void;
  onContentSizeChange: (contentWidth: number, contentHeight: number) => void;
  onLayout: (event: LayoutChangeEvent) => void;
  itemsLayout: ItemLayout[];
  scrollViewRef: React.RefObject<T>;
}

const useScrollItem = <T extends ScrollToSupportedViews>(
  props: ScrollItemProps
): ScrollItemResultProps<T> => {
  const { itemsCount } = props;
  const [itemsLayout, setItemsLayout] = useState<ItemLayout[]>(
    times(itemsCount, () => ({ containerWidth: 0, containerLeft: 0, left: 0, width: 0 }))
  );
  const scrollViewRef = useRef<T>(null);

  const { scrollTo, onContentSizeChange, onLayout } = useScrollTo<T>({
    scrollViewRef,
  });

  const onItemLayout = useCallback((event: LayoutChangeEvent, index: number) => {
    const { layout } = event.nativeEvent;
    setItemsLayout(preItemsLayout => {
      const cur = preItemsLayout[index];
      cur.left = layout.x;
      cur.width = layout.width;
      return [...preItemsLayout];
    });
  }, []);

  const onItemContainerLayout = useCallback((event: LayoutChangeEvent, index: number) => {
    const { layout } = event.nativeEvent;
    setItemsLayout(preItemsLayout => {
      const cur = preItemsLayout[index];
      cur.containerLeft = layout.x;
      cur.containerWidth = layout.width;
      return [...preItemsLayout];
    });
  }, []);

  const focusIndex = useCallback((index: number, animated = true) => {}, []);

  return {
    scrollViewRef,
    itemsLayout,
    onItemLayout,
    onItemContainerLayout,
    onContentSizeChange,
    onLayout,
  };
};

export default useScrollItem;
