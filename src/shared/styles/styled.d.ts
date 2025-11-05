import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      yellow: string;
      green: string;
      red: string;
      blue: string;
      pink: string;
      orange: string;
      sub_yellow: string;
      sub_green: string;
      sub_blue: string;
      black: string;
      white: string;
      gray_1: string;
      gray_2: string;
      gray_3: string;
      gray_4: string;
      gray_5: string;
      black_dimmed: string;
    };
    font: {
      family: string;
      heading_XXL: string;
      heading_XL: string;
      heading_L: string;
      heading_M: string;
      body_L: string;
      body_M: string;
      body_S: string;
      body_XS: string;
      description: string;
      weightBold: number;
      weightSemiBold: number;
      weightRegular: number;
    };
  }
}
