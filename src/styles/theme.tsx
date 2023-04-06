import { extendTheme } from 'native-base';

export const theme = extendTheme({
    colors: {
        //Add your basic Colors here
        white: '#FFFFFF',
        black: '#000000',
        black38: 'rgba(0,0,0,0.38)',
        black60: 'rgba(0,0,0,0.60)',
        black87: 'rgba(0,0,0,0.87)',

        //Add your theme Colors here
        primary: {
            50: '#F5FBFB',
            100: '#EBF8F7',
            200: '#CDEDEA',
            300: '#AEE1DE',
            400: '#72CBC5',
            500: '#35B5AC',
            600: '#30A39B',
            700: '#288881',
            800: '#206D67',
            900: '#1A5954',
        },
        secondary: {
            50: '#E8F7FC',
            100: '#D2EFF9',
            200: '#A9E0F4',
            300: '#7BD0EF',
            400: '#4EC0E9',
            500: '#22AFE4',
            600: '#178FBA',
            700: '#116C8D',
            800: '#0C495F',
            900: '#06232D',
        },
        success: {
            50: '#F4FBFA',
            100: '#EDF8F6',
            200: '#DAF1ED',
            300: '#C8EAE4',
            400: '#B1E2D9',
            500: '#A0DBD0',
            600: '#67C5B4',
            700: '#3FA693',
            800: '#2A6F62',
            900: '#153731',
        },
        info: {
            50: '#F4F9FB',
            100: '#EDF6F8',
            200: '#D7EBEF',
            300: '#C4E1E8',
            400: '#B2D8E1',
            500: '#9ECED9',
            600: '#69B3C4',
            700: '#3F8FA1',
            800: '#2A5E6A',
            900: '#163137',
        },
        warning: {
            50: '#FFFDEB',
            100: '#FEFAD7',
            200: '#FEF6AF',
            300: '#FDF28B',
            400: '#FDED63',
            500: '#FCEA3B',
            600: '#F6DE04',
            700: '#BAA803',
            800: '#796D02',
            900: '#3C3601',
        },
        error: {
            50: '#FBE5EA',
            100: '#F7CFD8',
            200: '#EE9BAD',
            300: '#E66B85',
            400: '#DD375B',
            500: '#BC2041',
            600: '#941934',
            700: '#711328',
            800: '#4A0D1A',
            900: '#27070E',
        },
        gray: {
            50: '#FBFBFB',
            100: '#F7F7F7',
            200: '#ECECEC',
            300: '#E1E1E1',
            400: '#CACACA',
            500: '#BCBCBC',
            600: '#A1A1A1',
            700: '#868686',
            800: '#6B6B6B',
            900: '#585858',
        },
    },
    fontConfig: {
        Raleway: {
            100: {
                normal: 'Raleway-Regular'
            },
            200: {
                normal: 'Raleway-Regular',
            },
            300: {
                normal: 'Raleway-Regular',
            },
            400: {
                normal: 'Raleway-Regular',
            },
            500: {
                normal: 'Raleway-Medium',
            },
            600: {
                normal: 'Raleway-Bold',
            },
            700: {
                normal: 'Raleway-Bold',
            },
            800: {
                normal: 'Raleway-Bold',
            },
        },
    },
    fonts: {
        heading: 'Raleway',
        body: 'Raleway',
        mono: 'Raleway',
    },
    fontSizes: {
        'xxs': 10,
        'xs': 12,
        'sm': 14,
        'md': 16,
        'lg': 18,
        'xl': 20,
        '2xl': 24,
        '3xl': 30,
        '4xl': 36,
        '5xl': 48,
    },
    fontWeights: {
        thinner: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        bold: 600
    },

    components: {
        Heading: {
            baseStyle: {
                color: 'black',
            },
            defaultProps: {
                fontSize: '22px',
            },
        },
        Button: {
            baseStyle: {
                borderRadius: '35px',
            },
            defaultProps: {
                colorScheme: 'primary',
                py: '14px',
                _text: {
                    fontSize: '20px',
                    fontWeight: 700,
                    lineHeight: 24,
                },
            },
        },
        Input: {
            baseStyle: {
                borderRadius: '4px',
                backgroundColor: 'white',
                color: 'black87',
                placeholderTextColor: 'black38',
            },
            defaultProps: {
                fontSize: '16px',
                paddingLeft: '16px',
                py: '14px',
            },
        },
        FormControlLabel: {
            baseStyle: {
                _text: {
                    fontSize: '16px',
                    fontWeight: 400,
                    color: 'black60',
                },
            },
        },
        FormControlErrorMessage: {
            baseStyle: {
                _text: {
                    fontSize: '14px',
                },
            },
        },
        TextArea: {
            sizes: {
                '16': {
                    fontSize: '16px',
                },
            },
            baseStyle: {
                width: '100%',
                h: '200px',
                color: 'gray.900',
                fontWeight: 500
            },
            defaultProps: {
                borderWidth: 0,
                borderRadius: '20px',
                p: '20px',
                size: '16'
            },
        },
        Actionsheet: {
            defaultProps: {},
        },
        ActionsheetContent: {
            baseStyle: {
                alignItems: 'center',
                backgroundColor: 'transparent',
                px: 0,
                borderTopWidth: 0,
                borderTopColor: 'transparent',
                shadowOpacity: 0,
                borderRadius: 'none',
                roundedTop: 50,
            }
        },
    },
});
