import type { Schema, Struct } from '@strapi/strapi';

export interface FeaturesSpoiler extends Struct.ComponentSchema {
  collectionName: 'components_features_spoilers';
  info: {
    displayName: 'spoiler';
    icon: 'alien';
  };
  attributes: {
    actualSpoiler: Schema.Attribute.String;
    clickableText: Schema.Attribute.String;
  };
}

export interface FeaturesTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_features_testimonials';
  info: {
    displayName: 'testimonial';
    icon: 'archive';
  };
  attributes: {
    authorName: Schema.Attribute.String;
    photo: Schema.Attribute.Media<'images' | 'files'>;
    quote: Schema.Attribute.Text;
  };
}

export interface FeaturesTextEditor extends Struct.ComponentSchema {
  collectionName: 'components_features_text_editors';
  info: {
    displayName: 'textEditor';
    icon: 'book';
  };
  attributes: {
    tiny_editor: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<'plugin::tinymce.tinymce'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'features.spoiler': FeaturesSpoiler;
      'features.testimonial': FeaturesTestimonial;
      'features.text-editor': FeaturesTextEditor;
    }
  }
}
