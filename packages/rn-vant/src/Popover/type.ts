import type React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { PopoverPlacement as Placement } from 'react-native-popover-view';

export type PopoverTheme = 'light' | 'dark';
export type PopoverPlacement = `${Placement}`;

export type PopoverAction = {
  /** 选项文字	 */
  text: string;
  /** 文字左侧的图标，支持传入图标名称或图片链接	 */
  icon?: React.ReactNode;
  /** 选项文字颜色	 */
  color?: string;
  /** 是否为禁用状态	 */
  disabled?: boolean;
  /** 为对应选项添加额外的样式 */
  style?: StyleProp<ViewStyle>;
};

export interface PopoverProps {
  /** 是否显示遮罩层	 */
  overlay?: boolean;
  /** 动画时长，单位毫秒，设置为 0 可以禁用动画	 */
  duration?: number;
  /** 自定义遮罩层样式	 */
  overlayStyle?: StyleProp<ViewStyle>;
  /** 是否在点击选项后关闭	 */
  closeOnClickAction?: boolean;
  /** 是否在点击遮罩层后关闭菜单	 */
  closeOnClickOverlay?: boolean;
  /** 是否在点击外部元素后关闭菜单	 */
  closeOnClickOutside?: boolean;
  /** 出现位置的偏移量 */
  offset?: number;
  /** 主题风格，可选值为 dark	 */
  theme?: PopoverTheme;
  /** 选项列表	 */
  actions?: PopoverAction[];
  /** 弹出位置	 */
  placement?: PopoverPlacement;
  /** 触发 Popover 显示的元素内容 */
  reference?: string | React.ReactNode;
  children?: React.ReactNode;
  /** 点击选项时触发	 */
  onSelect?: (action: PopoverAction, index: number) => void;
  /** 点击遮罩层时触发 */
  onClickOverlay?: () => void;
  /** 打开弹出层时触发	 */
  onOpen?: () => void;
  /** 关闭弹出层触发	*/
  onClose?: () => void;
  /** 打开弹出层且动画结束后触发 */
  onOpened?: () => void;
  /** 关闭弹出层且动画结束后触发 */
  onClosed?: () => void;
}

export type PopoverInstance = {
  /** 打开popover */
  show: () => void;
  /** 关闭popover */
  hide: () => void;
};
