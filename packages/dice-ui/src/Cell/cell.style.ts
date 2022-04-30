import { StyleSheet, StyleProp, TextStyle } from 'react-native';

export const createStyle = (theme: DiceUI.Theme) => {
  const text: StyleProp<TextStyle> = {
    alignItems: 'center',
    lineHeight: theme.cell_line_height,
    color: theme.cell_text_color,
    fontSize: theme.cell_font_size,
  };

  return StyleSheet.create({
    icon: {
      height: 24,
      justifyContent: 'center',
    },
    label: {
      color: theme.cell_label_color,
      fontSize: theme.cell_label_font_size,
      lineHeight: theme.cell_label_line_height,
      marginTop: theme.cell_label_margin_top,
    },
    larbelLarge: {
      fontSize: theme.cell_large_label_font_size,
    },
    left: {
      flex: 1,
    },
    right: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    title: {
      ...text,
    },
    titleLarge: {
      fontSize: theme.cell_large_title_font_size,
    },
    value: {
      ...text,
      color: theme.cell_value_color,
    },
    wrapper: {
      backgroundColor: theme.cell_background_color,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: theme.cell_padding_horizontal,
      paddingVertical: theme.cell_padding_vertical,
      position: 'relative',
    },
    wrapperBorder: {
      backgroundColor: theme.cell_border_color,
      height: 1,
      marginHorizontal: theme.cell_padding_horizontal,
      position: 'absolute',
      top: 0,
      width: '100%',
    },
    wrapperLarge: {
      paddingVertical: theme.cell_large_padding_vertical,
    },
  });
};