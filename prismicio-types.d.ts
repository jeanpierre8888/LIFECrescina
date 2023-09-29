// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type HomeDocumentDataSlicesSlice =
  | RecomendacionesSectionSlice
  | FormulacionSlice
  | SimpleBannerSlice
  | FactSectionSlice
  | NewsSectionSlice
  | NewsHeaderSlice
  | SliderSlice
  | CallToActionSlimSlice
  | StaticBannerSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

export type AllDocumentTypes = HomeDocument;

/**
 * Primary content in *CallToActionSlim → Primary*
 */
export interface CallToActionSlimSliceDefaultPrimary {
  /**
   * Main Text field in *CallToActionSlim → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_slim.primary.main_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  main_text: prismic.KeyTextField;

  /**
   * Button Text field in *CallToActionSlim → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_slim.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *CallToActionSlim → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: call_to_action_slim.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for CallToActionSlim Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlimSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CallToActionSlimSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *CallToActionSlim*
 */
type CallToActionSlimSliceVariation = CallToActionSlimSliceDefault;

/**
 * CallToActionSlim Shared Slice
 *
 * - **API ID**: `call_to_action_slim`
 * - **Description**: CallToActionSlim
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CallToActionSlimSlice = prismic.SharedSlice<
  "call_to_action_slim",
  CallToActionSlimSliceVariation
>;

/**
 * Primary content in *FactSection → Primary*
 */
export interface FactSectionSliceImageLeftPrimary {
  /**
   * Title field in *FactSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fact_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *FactSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fact_section.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Image field in *FactSection → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: fact_section.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Image Left variation for FactSection Slice
 *
 * - **API ID**: `image_left`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FactSectionSliceImageLeft = prismic.SharedSliceVariation<
  "image_left",
  Simplify<FactSectionSliceImageLeftPrimary>,
  never
>;

/**
 * Primary content in *FactSection → Primary*
 */
export interface FactSectionSliceImageRightPrimary {
  /**
   * Title field in *FactSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fact_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *FactSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: fact_section.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Image field in *FactSection → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: fact_section.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Image Right variation for FactSection Slice
 *
 * - **API ID**: `image_right`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FactSectionSliceImageRight = prismic.SharedSliceVariation<
  "image_right",
  Simplify<FactSectionSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *FactSection*
 */
type FactSectionSliceVariation =
  | FactSectionSliceImageLeft
  | FactSectionSliceImageRight;

/**
 * FactSection Shared Slice
 *
 * - **API ID**: `fact_section`
 * - **Description**: FactSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FactSectionSlice = prismic.SharedSlice<
  "fact_section",
  FactSectionSliceVariation
>;

/**
 * Primary content in *Formulacion → Primary*
 */
export interface FormulacionSliceDefaultPrimary {
  /**
   * Title field in *Formulacion → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: formulacion.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Image field in *Formulacion → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: formulacion.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *Formulacion → Items*
 */
export interface FormulacionSliceDefaultItem {
  /**
   * Title field in *Formulacion → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: formulacion.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *Formulacion → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: formulacion.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Default variation for Formulacion Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FormulacionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FormulacionSliceDefaultPrimary>,
  Simplify<FormulacionSliceDefaultItem>
>;

/**
 * Slice variation for *Formulacion*
 */
type FormulacionSliceVariation = FormulacionSliceDefault;

/**
 * Formulacion Shared Slice
 *
 * - **API ID**: `formulacion`
 * - **Description**: Formulacion
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FormulacionSlice = prismic.SharedSlice<
  "formulacion",
  FormulacionSliceVariation
>;

/**
 * Primary content in *NewsHeader → Primary*
 */
export interface NewsHeaderSliceDefaultPrimary {
  /**
   * Logo field in *NewsHeader → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news_header.primary.logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Title field in *NewsHeader → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_header.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *NewsHeader → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_header.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Default variation for NewsHeader Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsHeaderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NewsHeaderSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NewsHeader*
 */
type NewsHeaderSliceVariation = NewsHeaderSliceDefault;

/**
 * NewsHeader Shared Slice
 *
 * - **API ID**: `news_header`
 * - **Description**: NewsHeader
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsHeaderSlice = prismic.SharedSlice<
  "news_header",
  NewsHeaderSliceVariation
>;

/**
 * Primary content in *NewsSection → Items*
 */
export interface NewsSectionSliceDefaultItem {
  /**
   * Image field in *NewsSection → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: news_section.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *NewsSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_section.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *NewsSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_section.items[].subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Text field in *NewsSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_section.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Footer field in *NewsSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: news_section.items[].footer
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  footer: prismic.KeyTextField;
}

/**
 * Default variation for NewsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<NewsSectionSliceDefaultItem>
>;

/**
 * Slice variation for *NewsSection*
 */
type NewsSectionSliceVariation = NewsSectionSliceDefault;

/**
 * NewsSection Shared Slice
 *
 * - **API ID**: `news_section`
 * - **Description**: NewsSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsSectionSlice = prismic.SharedSlice<
  "news_section",
  NewsSectionSliceVariation
>;

/**
 * Primary content in *RecomendacionesSection → Primary*
 */
export interface RecomendacionesSectionSliceDefaultPrimary {
  /**
   * Image field in *RecomendacionesSection → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: recomendaciones_section.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *RecomendacionesSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recomendaciones_section.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *RecomendacionesSection → Items*
 */
export interface RecomendacionesSectionSliceDefaultItem {
  /**
   * Text field in *RecomendacionesSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recomendaciones_section.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Default variation for RecomendacionesSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecomendacionesSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RecomendacionesSectionSliceDefaultPrimary>,
  Simplify<RecomendacionesSectionSliceDefaultItem>
>;

/**
 * Slice variation for *RecomendacionesSection*
 */
type RecomendacionesSectionSliceVariation = RecomendacionesSectionSliceDefault;

/**
 * RecomendacionesSection Shared Slice
 *
 * - **API ID**: `recomendaciones_section`
 * - **Description**: RecomendacionesSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecomendacionesSectionSlice = prismic.SharedSlice<
  "recomendaciones_section",
  RecomendacionesSectionSliceVariation
>;

/**
 * Primary content in *SimpleBanner → Primary*
 */
export interface SimpleBannerSliceDefaultPrimary {
  /**
   * Background field in *SimpleBanner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: simple_banner.primary.background
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background: prismic.ImageField<never>;

  /**
   * Title field in *SimpleBanner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: simple_banner.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Default variation for SimpleBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SimpleBannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SimpleBannerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SimpleBanner*
 */
type SimpleBannerSliceVariation = SimpleBannerSliceDefault;

/**
 * SimpleBanner Shared Slice
 *
 * - **API ID**: `simple_banner`
 * - **Description**: SimpleBanner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SimpleBannerSlice = prismic.SharedSlice<
  "simple_banner",
  SimpleBannerSliceVariation
>;

/**
 * Primary content in *Slider → Items*
 */
export interface SliderSliceDefaultItem {
  /**
   * Background Image field in *Slider → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: slider.items[].background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Main Text field in *Slider → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: slider.items[].main_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  main_text: prismic.KeyTextField;

  /**
   * Button Text field in *Slider → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: slider.items[].button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;

  /**
   * Button Link field in *Slider → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: slider.items[].button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;
}

/**
 * Default variation for Slider Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SliderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<SliderSliceDefaultItem>
>;

/**
 * Slice variation for *Slider*
 */
type SliderSliceVariation = SliderSliceDefault;

/**
 * Slider Shared Slice
 *
 * - **API ID**: `slider`
 * - **Description**: Slider
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SliderSlice = prismic.SharedSlice<"slider", SliderSliceVariation>;

/**
 * Primary content in *StaticBanner → Primary*
 */
export interface StaticBannerSliceDefaultPrimary {
  /**
   * Background Image field in *StaticBanner → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: static_banner.primary.background_image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  background_image: prismic.ImageField<never>;

  /**
   * Main Title field in *StaticBanner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: static_banner.primary.main_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  main_title: prismic.KeyTextField;

  /**
   * Secondary Title field in *StaticBanner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: static_banner.primary.secondary_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  secondary_title: prismic.KeyTextField;

  /**
   * Main Text field in *StaticBanner → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: static_banner.primary.main_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  main_text: prismic.KeyTextField;
}

/**
 * Default variation for StaticBanner Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StaticBannerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<StaticBannerSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *StaticBanner*
 */
type StaticBannerSliceVariation = StaticBannerSliceDefault;

/**
 * StaticBanner Shared Slice
 *
 * - **API ID**: `static_banner`
 * - **Description**: StaticBanner
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type StaticBannerSlice = prismic.SharedSlice<
  "static_banner",
  StaticBannerSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      AllDocumentTypes,
      CallToActionSlimSlice,
      CallToActionSlimSliceDefaultPrimary,
      CallToActionSlimSliceVariation,
      CallToActionSlimSliceDefault,
      FactSectionSlice,
      FactSectionSliceImageLeftPrimary,
      FactSectionSliceImageRightPrimary,
      FactSectionSliceVariation,
      FactSectionSliceImageLeft,
      FactSectionSliceImageRight,
      FormulacionSlice,
      FormulacionSliceDefaultPrimary,
      FormulacionSliceDefaultItem,
      FormulacionSliceVariation,
      FormulacionSliceDefault,
      NewsHeaderSlice,
      NewsHeaderSliceDefaultPrimary,
      NewsHeaderSliceVariation,
      NewsHeaderSliceDefault,
      NewsSectionSlice,
      NewsSectionSliceDefaultItem,
      NewsSectionSliceVariation,
      NewsSectionSliceDefault,
      RecomendacionesSectionSlice,
      RecomendacionesSectionSliceDefaultPrimary,
      RecomendacionesSectionSliceDefaultItem,
      RecomendacionesSectionSliceVariation,
      RecomendacionesSectionSliceDefault,
      SimpleBannerSlice,
      SimpleBannerSliceDefaultPrimary,
      SimpleBannerSliceVariation,
      SimpleBannerSliceDefault,
      SliderSlice,
      SliderSliceDefaultItem,
      SliderSliceVariation,
      SliderSliceDefault,
      StaticBannerSlice,
      StaticBannerSliceDefaultPrimary,
      StaticBannerSliceVariation,
      StaticBannerSliceDefault,
    };
  }
}
