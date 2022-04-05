import { Dimensions } from 'react-native';
import * as _vars from './variables';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export const createDefaultTheme = (vars: typeof _vars) => ({
  ...vars,
  dark: false,

  // Button
  button_mini_height: 24,
  button_mini_padding_horizontal: vars.padding_base,
  button_mini_font_size: vars.font_size_xs,
  button_small_height: 32,
  button_small_padding_horizontal: vars.padding_xs,
  button_small_font_size: vars.font_size_sm,
  button_normal_padding_horizontal: 15,
  button_normal_font_size: vars.font_size_md,
  button_large_height: 50,
  button_default_height: 44,
  button_default_font_size: vars.font_size_lg,
  button_default_color: vars.text_color,
  button_default_background_color: vars.background_2,
  button_default_border_color: vars.gray_4,
  button_primary_color: vars.white,
  button_primary_background_color: vars.primary_color,
  button_primary_border_color: vars.primary_color,
  button_success_color: vars.white,
  button_success_background_color: vars.success_color,
  button_success_border_color: vars.success_color,
  button_danger_color: vars.white,
  button_danger_background_color: vars.danger_color,
  button_danger_border_color: vars.danger_color,
  button_warning_color: vars.white,
  button_warning_background_color: vars.warning_color,
  button_warning_border_color: vars.warning_color,
  button_border_width: vars.border_width_base,
  button_border_radius: vars.border_radius_sm,
  button_round_border_radius: vars.border_radius_max,
  button_plain_background_color: vars.white,
  button_disabled_opacity: vars.disabled_opacity,

  // Cell
  cell_font_size: vars.font_size_md,
  cell_line_height: 24,
  cell_padding_vertical: 10,
  cell_padding_horizontal: vars.padding_md,
  cell_text_color: vars.text_color,
  cell_background_color: vars.background_2,
  cell_border_color: vars.border_color,
  cell_active_color: vars.active_color,
  cell_required_color: vars.red,
  cell_label_color: vars.gray_6,
  cell_label_font_size: vars.font_size_sm,
  cell_label_line_height: vars.line_height_sm,
  cell_label_margin_top: vars.padding_base,
  cell_value_color: vars.gray_6,
  cell_icon_size: 16,
  cell_right_icon_color: vars.gray_6,
  cell_large_padding_vertical: vars.padding_sm,
  cell_large_title_font_size: vars.font_size_lg,
  cell_large_label_font_size: vars.font_size_md,

  // CellGroup
  cell_group_background_color: vars.white,
  cell_group_title_color: vars.gray_6,
  cell_group_title_padding_horizontal: vars.padding_md,
  cell_group_title_padding_top: vars.padding_md,
  cell_group_title_padding_bottom: vars.padding_xs,
  cell_group_title_font_size: vars.font_size_md,
  cell_group_title_line_height: 16,

  // Checkbox
  checkbox_icon_border_color: vars.gray_5,
  checkbox_icon_size: 20,
  checkbox_disabled_background_color: vars.border_color,
  checkbox_checked_icon_color: vars.primary_color,
  checkbox_label_color: vars.text_color,
  checkbox_label_margin: vars.padding_xs,
  checkbox_disabled_label_color: vars.text_color_3,
  checkbox_disabled_icon_color: vars.gray_5,

  // Radio
  radio_icon_border_color: vars.gray_5,
  radio_icon_size: 20,
  radio_disabled_background_color: vars.border_color,
  radio_checked_icon_color: vars.primary_color,
  radio_label_color: vars.text_color,
  radio_label_margin: vars.padding_xs,
  radio_disabled_label_color: vars.text_color_3,
  radio_disabled_icon_color: vars.gray_5,

  // Image
  image_default_size: 100, // 图片默认尺寸
  image_placeholder_text_color: vars.gray_6,
  image_placeholder_font_size: vars.font_size_md,
  image_placeholder_background_color: vars.background,
  image_loading_icon_size: 32,
  image_loading_icon_color: vars.gray_4,
  image_error_icon_size: 32,
  image_error_icon_color: vars.gray_4,

  // Switch
  switch_size: 30,
  switch_width_ratio: 2, // 原变量中使用了 em，这里改成对应的比例
  switch_height_ratio: 1, // 原变量中使用了 em，这里改成对应的比例
  switch_node_size_ratio: 1, // 原变量中使用了 em，这里改成对应的比例
  switch_node_background_color: vars.white,
  switch_background_color: vars.background_2,
  switch_on_background_color: vars.primary_color,
  switch_transition_duration: vars.animation_duration_base,
  switch_disabled_opacity: vars.disabled_opacity,
  switch_border_width: vars.border_width_base,
  switch_border_color: 'rgba(0, 0, 0, 0.1)',

  // Tag
  tag_padding_horizontal: vars.padding_base,
  tag_text_color: vars.white,
  tag_font_size: vars.font_size_sm,
  tag_border_radius: 2,
  tag_line_height: 16,
  tag_medium_padding_vertical: 2,
  tag_medium_padding_horizontal: 6,
  tag_large_padding_vertical: vars.padding_base,
  tag_large_padding_horizontal: vars.padding_xs,
  tag_large_border_radius: vars.border_radius_md,
  tag_large_font_size: vars.font_size_md,
  tag_round_border_radius: vars.border_radius_max,
  tag_danger_color: vars.red,
  tag_primary_color: vars.blue,
  tag_success_color: vars.green,
  tag_warning_color: vars.orange,
  tag_default_color: vars.gray_6,
  tag_plain_background_color: vars.white,

  // Divider
  divider_margin_vertical: vars.padding_md,
  divider_margin_horizontal: vars.padding_md,
  divider_text_color: vars.text_color_2,
  divider_font_size: vars.font_size_md,
  divider_line_height: 24,
  divider_border_color: vars.border_color,
  divider_content_padding: vars.padding_md,
  divider_content_left_width: '10%',
  divider_content_right_width: '10%',

  // NavBar
  nav_bar_height: 46,
  nav_bar_background_color: vars.white,
  nav_bar_arrow_size: 16,
  nav_bar_icon_color: vars.primary_color,
  nav_bar_text_color: vars.primary_color,
  nav_bar_title_font_size: vars.font_size_lg,
  nav_bar_title_text_color: vars.text_color,
  nav_bar_z_index: 1,

  // NoticeBar
  notice_bar_height: 40,
  notice_bar_padding_horizontal: vars.padding_md,
  notice_bar_padding_vertical: 0,
  notice_bar_wrapable_padding_horizontal: vars.padding_md,
  notice_bar_wrapable_padding_vertical: vars.padding_xs,
  notice_bar_text_color: vars.orange_dark,
  notice_bar_font_size: vars.font_size_md,
  notice_bar_line_height: 24,
  notice_bar_background_color: vars.orange_light,
  notice_bar_icon_size: 16,
  notice_bar_icon_min_width: 24,

  // Rate
  rate_icon_size: 20,
  rate_icon_gutter: vars.padding_base,
  rate_icon_void_color: vars.gray_5,
  rate_icon_full_color: vars.danger_color,
  rate_icon_disabled_color: vars.gray_5,

  // Progress
  progress_height: 4,
  progress_color: vars.primary_color,
  progress_inactive_color: vars.gray_5,
  progress_background_color: vars.gray_3,
  progress_pivot_padding_horizontal: 5,
  progress_pivot_padding_vertical: 0,
  progress_pivot_text_color: vars.white,
  progress_pivot_font_size: vars.font_size_xs,
  progress_pivot_line_height: 1.6 * vars.font_size_xs,

  // Badge
  badge_size: 16,
  badge_color: vars.white,
  badge_padding_horizontal: 3,
  badge_padding_vertical: 0,
  badge_font_size: vars.font_size_sm,
  badge_font_weight: vars.font_weight_bold,
  badge_border_width: vars.border_width_base,
  badge_background_color: vars.danger_color,
  badge_dot_color: vars.danger_color,
  badge_dot_size: 8,

  // Circle
  circle_size: 100,
  circle_color: vars.primary_color,
  circle_layer_color: vars.white,
  circle_text_color: vars.text_color,
  circle_text_font_weight: vars.font_weight_bold,
  circle_text_font_size: vars.font_size_md,
  circle_text_line_height: vars.line_height_md,

  // Slider
  slider_active_background_color: vars.primary_color,
  slider_inactive_background_color: vars.gray_3,
  slider_disabled_opacity: vars.disabled_opacity,
  slider_bar_height: 2,
  slider_button_width: 24,
  slider_button_height: 24,
  slider_button_background_color: vars.white,

  // Swiper
  swiper_indicator_size: 6,
  swiper_indicator_margin: vars.padding_sm,
  swiper_indicator_active_opacity: 1,
  swiper_indicator_inactive_opacity: 0.3,
  swiper_indicator_active_background_color: vars.primary_color,
  swiper_indicator_inactive_background_color: vars.border_color,

  // Overlay
  overlay_background_color: 'rgba(0, 0, 0, 0.7)',

  // Toast
  toast_max_width: 0.7 * windowWidth,
  toast_font_size: vars.font_size_md,
  toast_text_color: vars.white,
  toast_loading_icon_color: vars.white,
  toast_line_height: vars.line_height_md,
  toast_border_radius: vars.border_radius_lg,
  toast_background_color: 'rgba(0, 0, 0, 0.7)',
  toast_icon_size: 36,
  toast_text_min_width: 96,
  toast_text_padding_vertical: vars.padding_xs,
  toast_text_padding_horizontal: vars.padding_sm,
  toast_default_padding: vars.padding_md,
  toast_default_width: 88,
  toast_default_min_height: 88,
  toast_position_top_distance: 0.2 * windowHeight,
  toast_position_bottom_distance: 0.2 * windowHeight,

  // Popup
  popup_background_color: vars.white,
  popup_round_border_radius: 16,
  popup_close_icon_size: 22,
  popup_close_icon_color: vars.gray_5,
  popup_close_icon_active_color: vars.gray_6,
  popup_close_icon_margin: 13,
  popup_title_font_size: vars.font_size_lg,
  popup_descrition_font_size: vars.font_size_md,
  popup_descrition_color: vars.gray_6,
  popup_header_font_size: vars.font_size_lg,
  popup_header_height: 48,

  // Typography
  typography_color: vars.text_color,
  typography_link_color: vars.primary_color,
  typography_font_size: vars.font_size_md,
  typography_line_height: vars.line_height_md,
  typography_primary_color: vars.primary_color,
  typography_danger_color: vars.danger_color,
  typography_success_color: vars.success_color,
  typography_warning_color: vars.warning_color,
  typography_secondary_color: vars.gray_6,
  typography_disabled_color: vars.gray_5,
  typography_light_color: vars.white,

  // ActionSheet
  action_sheet_max_height: 0.8 * windowHeight,
  action_sheet_description_color: vars.text_color_2,
  action_sheet_description_font_size: vars.font_size_md,
  action_sheet_description_line_height: vars.line_height_md,
  action_sheet_item_background: vars.background_2,
  action_sheet_item_font_size: vars.font_size_lg,
  action_sheet_item_line_height: vars.line_height_lg,
  action_sheet_item_text_color: vars.text_color,
  action_sheet_item_disabled_text_color: vars.text_color_3,
  action_sheet_subname_color: vars.text_color_2,
  action_sheet_subname_font_size: vars.font_size_sm,
  action_sheet_subname_line_height: vars.line_height_sm,
  action_sheet_close_icon_size: 22,
  action_sheet_close_icon_color: vars.gray_5,
  action_sheet_close_icon_padding_vertical: 0,
  action_sheet_close_icon_padding_horizontal: vars.padding_md,
  action_sheet_cancel_text_color: vars.gray_7,
  action_sheet_cancel_padding_top: vars.padding_xs,
  action_sheet_cancel_padding_color: vars.background,
  action_sheet_loading_icon_size: 22,
});

export const defaultTheme = createDefaultTheme(_vars);
