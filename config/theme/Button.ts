import { createStyle } from "@gluestack-style/react";

export const Button = createStyle({
  borderRadius: "$lg",
  backgroundColor: "$primary4",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",

  _text: {
    color: "$textLight0",
    fontWeight: "$semibold",
    _dark: {
      color: "$textDark0",
    },
  },

  _icon: {
    color: "$textLight0",
    _dark: {
      color: "$textDark0",
    },
  },

  _spinner: {
    props: {
      color: "$backgroundLight0",
    },
    _dark: {
      props: {
        color: "$backgroundDark0",
      },
    },
  },

  variants: {
    action: {
      search: {
        bg: "transparent",
        borderColor: "$neutral9",
        borderWidth: "$1",

        ":hover": {
          bg: "$primary6",
          borderColor: "$primary3",
        },

        ":active": {
          bg: "$primary7",
          borderColor: "$primary7",
        },
        _text: {
          color: "$primary6",
          ":hover": {
            color: "$primary6",
          },
          ":active": {
            color: "$primary7",
          },
        },
      },
      primary: {
        bg: "$primary4",
        borderColor: "$primary300",

        ":hover": {
          bg: "$primary6",
          borderColor: "$primary4",
        },

        ":active": {
          bg: "$primary7",
          borderColor: "$primary7",
        },

        _text: {
          color: "$primary6",
          ":hover": {
            color: "$primary6",
          },
          ":active": {
            color: "$primary7",
          },
        },

        _icon: {
          color: "$primary6",
          ":hover": {
            color: "$primary6",
          },
          ":active": {
            color: "$primary7",
          },
        },

        _spinner: {
          props: {
            color: "$primary6",
          },
          ":hover": {
            props: {
              color: "$primary6",
            },
          },
          ":active": {
            props: {
              color: "$primary7",
            },
          },
        },

        _dark: {
          bg: "$primary4",
          borderColor: "$primary7",
          ":hover": {
            bg: "$primary4",
            borderColor: "$primary4",
          },
          ":active": {
            bg: "$primary6",
            borderColor: "$primary300",
          },
          _text: {
            color: "$primary300",
            ":hover": {
              color: "$primary300",
            },
            ":active": {
              color: "$primary2",
            },
          },
          _icon: {
            color: "$primary300",
            ":hover": {
              color: "$primary300",
            },
            ":active": {
              color: "$primary2",
            },
          },
          _spinner: {
            props: { color: "$primary300" },
            ":hover": {
              props: { color: "$primary300" },
            },
            ":active": {
              props: { color: "$primary2" },
            },
          },

          ":focusVisible": {
            _web: {
              boxShadow: "offset 0 0 0 2px $info400",
            },
          },
        },
      },
      secondary: {
        bg: "$secondary500",
        borderColor: "$secondary300",

        ":hover": {
          bg: "$secondary600",
          borderColor: "$secondary400",
        },

        ":active": {
          bg: "$secondary700",
          borderColor: "$secondary700",
        },

        _text: {
          color: "$secondary600",
          ":hover": {
            color: "$secondary600",
          },
          ":active": {
            color: "$secondary700",
          },
        },
        _icon: {
          color: "$secondary600",
          ":hover": {
            color: "$secondary600",
          },
          ":active": {
            color: "$secondary700",
          },
        },

        _spinner: {
          props: {
            color: "$secondary600",
          },
          ":hover": {
            props: { color: "$secondary600" },
          },
          ":active": {
            props: { color: "$secondary700" },
          },
        },

        _dark: {
          bg: "$secondary400",
          borderColor: "$secondary700",
          ":hover": {
            bg: "$secondary500",
            borderColor: "$secondary400",
          },
          ":active": {
            bg: "$secondary600",
            borderColor: "$secondary300",
          },
          _text: {
            color: "$secondary300",
            ":hover": {
              color: "$secondary300",
            },
            ":active": {
              color: "$secondary200",
            },
          },
          _icon: {
            color: "$secondary300",
            ":hover": {
              color: "$secondary300",
            },
            ":active": {
              color: "$secondary200",
            },
          },
          _spinner: {
            props: {
              color: "$secondary300",
            },
            ":hover": {
              props: { color: "$secondary300" },
            },
            ":active": {
              props: { color: "$secondary200" },
            },
          },
        },
      },
      positive: {
        bg: "$success500",
        borderColor: "$success300",
        ":hover": {
          bg: "$success600",
          borderColor: "$success400",
        },

        ":active": {
          bg: "$success700",
          borderColor: "$success700",
        },

        _text: {
          color: "$success600",
          ":hover": {
            color: "$success600",
          },
          ":active": {
            color: "$success700",
          },
        },
        _icon: {
          color: "$success600",
          ":hover": {
            color: "$success600",
          },
          ":active": {
            color: "$success700",
          },
        },
        _spinner: {
          props: {
            color: "$success600",
          },
          ":hover": {
            props: { color: "$success600" },
          },
          ":active": {
            props: { color: "$success700" },
          },
        },
        _dark: {
          bg: "$success400",
          borderColor: "$success700",
          ":hover": {
            bg: "$success500",
            borderColor: "$success400",
          },
          ":active": {
            bg: "$success600",
            borderColor: "$success300",
          },
          _text: {
            color: "$success300",
            ":hover": {
              color: "$success300",
            },
            ":active": {
              color: "$success200",
            },
          },
          _icon: {
            color: "$success300",
            ":hover": {
              color: "$success300",
            },
            ":active": {
              color: "$success200",
            },
          },
          _spinner: {
            props: {
              color: "$success300",
            },
            ":hover": {
              props: { color: "$success300" },
            },
            ":active": {
              props: { color: "$success200" },
            },
          },
          ":focusVisible": {
            _web: {
              boxShadow: "offset 0 0 0 2px $info400",
            },
          },
        },
      },
      negative: {
        bg: "$error500",
        borderColor: "$error300",
        ":hover": {
          bg: "$error600",
          borderColor: "$error400",
        },

        ":active": {
          bg: "$error700",
          borderColor: "$error700",
        },
        _text: {
          color: "$error600",
          ":hover": {
            color: "$error600",
          },
          ":active": {
            color: "$error700",
          },
        },
        _icon: {
          color: "$error600",
          ":hover": {
            color: "$error600",
          },
          ":active": {
            color: "$error700",
          },
        },
        _spinner: {
          props: {
            color: "$error600",
          },
          ":hover": {
            props: { color: "$error600" },
          },
          ":active": {
            props: { color: "$error700" },
          },
        },
        _dark: {
          bg: "$error400",
          borderColor: "$error700",
          ":hover": {
            bg: "$error500",
            borderColor: "$error400",
          },
          ":active": {
            bg: "$error600",
            borderColor: "$error300",
          },
          _text: {
            color: "$error300",
            ":hover": {
              color: "$error300",
            },
            ":active": {
              color: "$error200",
            },
          },
          _icon: {
            color: "$error300",
            ":hover": {
              color: "$error300",
            },
            ":active": {
              color: "$error200",
            },
          },
          _spinner: {
            props: {
              color: "$error300",
            },
            ":hover": {
              props: { color: "$error300" },
            },
            ":active": {
              props: { color: "$error200" },
            },
          },
          ":focusVisible": {
            _web: {
              boxShadow: "offset 0 0 0 2px $info400",
            },
          },
        },
      },

      default: {
        bg: "$transparent",
        ":hover": {
          bg: "$backgroundLight50",
        },
        ":active": {
          bg: "transparent",
        },
        _dark: {
          bg: "transparent",
          ":hover": {
            bg: "$backgroundDark900",
          },
          ":active": {
            bg: "transparent",
          },
        },
      },
    },

    variant: {
      search: {
        bg: "transparent",
        boarderColor: "$neutral9",
        borderWidth: "$1",
        ":hover": {
          bg: "$backgroundLight50",
        },
        ":active": {
          bg: "transparent",
        },
      },
      link: {
        px: "$0",
        ":hover": {
          _text: {
            textDecorationLine: "underline",
          },
        },
        ":active": {
          _text: {
            textDecorationLine: "underline",
          },
        },
      },
      outline: {
        bg: "transparent",
        borderWidth: "$1",
        ":hover": {
          bg: "$backgroundLight50",
        },
        ":active": {
          bg: "transparent",
        },
        _dark: {
          bg: "transparent",
          ":hover": {
            bg: "$backgroundDark900",
          },
          ":active": {
            bg: "transparent",
          },
        },
      },
      solid: {
        _text: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _spinner: {
          props: { color: "$textLight0" },
          ":hover": {
            props: { color: "$textLight0" },
          },
          ":active": {
            props: { color: "$textLight0" },
          },
        },
        _icon: {
          props: { color: "$textLight0" },
          ":hover": {
            props: { color: "$textLight0" },
          },
          ":active": {
            props: { color: "$textLight0" },
          },
        },
        _dark: {
          _text: {
            color: "$textDark0",
            ":hover": {
              color: "$textDark0",
            },
            ":active": {
              color: "$textDark0",
            },
          },
          _spinner: {
            props: { color: "$textDark0" },
            ":hover": {
              props: { color: "$textDark0" },
            },
            ":active": {
              props: { color: "$textDark0" },
            },
          },
          _icon: {
            props: { color: "$textDark0" },
            ":hover": {
              props: { color: "$textDark0" },
            },
            ":active": {
              props: { color: "$textDark0" },
            },
          },
        },
      },
      filled: {
        bg: "$primary4",
        ":hover": {
          bg: "$primary5",
        },
        ":active": {
          bg: "$primary5",
        },
        _dark: {
          bg: "$backgroundDark0",
          ":hover": {
            bg: "$backgroundDark50",
          },
          ":active": {
            bg: "$backgroundDark100",
          },
        },
      },
    },

    size: {
      xs: {
        px: "$3.5",
        h: "$8",
        _icon: {
          props: {
            size: "2xs",
          },
        },
        _text: {
          props: {
            size: "xs",
          },
        },
      },
      sm: {
        px: "$4",
        h: "$9",
        _icon: {
          props: {
            size: "sm",
          },
        },
        _text: {
          props: {
            size: "sm",
          },
        },
      },
      md: {
        px: "$5",
        h: "$10",
        _icon: {
          props: {
            size: "md",
          },
        },
        _text: {
          props: {
            size: "md",
          },
        },
      },
      lg: {
        px: "$6",
        h: "$11",
        _icon: {
          props: {
            size: "md",
          },
        },
        _text: {
          props: {
            size: "lg",
          },
        },
      },
      xl: {
        px: "$7",
        h: "$12",
        _icon: {
          props: {
            size: "lg",
          },
        },
        _text: {
          props: {
            size: "xl",
          },
        },
      },
    },
  },
  compoundVariants: [
    {
      action: "search",
      variant: "search",
      value: {
        _text: {
          fontSize: "$small_1",
          color: "$neutral9",
          ":hover": {
            fontSize: "$small_1",
            color: "$gray0",
          },
          ":active": {
            fontSize: "$small_1",
            color: "$gray0",
          },
        },
        bg: "transparent",
        borderColor: "$neutral9",
        borderWidth: "$1",
        ":hover": {
          bg: "$primary3",
        },
        ":active": {
          bg: "$primary3",
        },
      },
    },
    {
      action: "primary",
      variant: "filled",
      value: {
        bg: "$primary4",
        ":hover": {
          bg: "$primary5",
        },
        ":active": {
          bg: "$primary5",
        },
        _dark: {
          bg: "$backgroundDark0",
          ":hover": {
            bg: "$backgroundDark50",
          },
          ":active": {
            bg: "$backgroundDark100",
          },
        },
      },
    },
    {
      action: "primary",
      variant: "link",
      value: {
        px: "$0",
        bg: "transparent",
        ":hover": {
          bg: "transparent",
        },
        ":active": {
          bg: "transparent",
        },
        _dark: {
          bg: "transparent",
          ":hover": {
            bg: "transparent",
          },
          ":active": {
            bg: "transparent",
          },
        },
      },
    },
    {
      action: "secondary",
      variant: "link",
      value: {
        px: "$0",
        bg: "transparent",
        ":hover": {
          bg: "transparent",
        },
        ":active": {
          bg: "transparent",
        },
        _dark: {
          bg: "transparent",
          ":hover": {
            bg: "transparent",
          },
          ":active": {
            bg: "transparent",
          },
        },
      },
    },
    {
      action: "positive",
      variant: "link",
      value: {
        px: "$0",
        bg: "transparent",
        ":hover": {
          bg: "transparent",
        },
        ":active": {
          bg: "transparent",
        },
        _dark: {
          bg: "transparent",
          ":hover": {
            bg: "transparent",
          },
          ":active": {
            bg: "transparent",
          },
        },
      },
    },
    {
      action: "negative",
      variant: "link",
      value: {
        px: "$0",
        bg: "transparent",
        ":hover": {
          bg: "transparent",
        },
        ":active": {
          bg: "transparent",
        },
        _dark: {
          bg: "transparent",
          ":hover": {
            bg: "transparent",
          },
          ":active": {
            bg: "transparent",
          },
        },
      },
    },
    {
      action: "primary",
      variant: "outline",
      value: {
        bg: "transparent",
        ":hover": {
          bg: "$backgroundLight50",
        },
        ":active": {
          bg: "transparent",
        },
        _dark: {
          bg: "transparent",
          ":hover": {
            bg: "$backgroundDark900",
          },
          ":active": {
            bg: "transparent",
          },
        },
      },
    },
    {
      action: "secondary",
      variant: "outline",
      value: {
        bg: "transparent",
        ":hover": {
          bg: "$backgroundLight50",
        },
        ":active": {
          bg: "transparent",
        },
        _dark: {
          bg: "transparent",
          ":hover": {
            bg: "$backgroundDark900",
          },
          ":active": {
            bg: "transparent",
          },
        },
      },
    },
    {
      action: "positive",
      variant: "outline",
      value: {
        bg: "transparent",
        ":hover": {
          bg: "$backgroundLight50",
        },
        ":active": {
          bg: "transparent",
        },
        _dark: {
          bg: "transparent",
          ":hover": {
            bg: "$backgroundDark900",
          },
          ":active": {
            bg: "transparent",
          },
        },
      },
    },
    {
      action: "negative",
      variant: "outline",
      value: {
        bg: "transparent",
        ":hover": {
          bg: "$backgroundLight50",
        },
        ":active": {
          bg: "transparent",
        },
        _dark: {
          bg: "transparent",
          ":hover": {
            bg: "$backgroundDark900",
          },
          ":active": {
            bg: "transparent",
          },
        },
      },
    },
    {
      action: "primary",
      variant: "solid",
      value: {
        _text: {
          color: "$gray0",
          ":hover": {
            color: "$gray0",
          },
          ":active": {
            color: "$gray0",
          },
        },
        _icon: {
          color: "$gray0",
          ":hover": {
            color: "$gray0",
          },
          ":active": {
            color: "$gray0",
          },
        },
        _spinner: {
          props: { color: "$gray0" },
          ":hover": {
            props: { color: "$gray0" },
          },
          ":active": {
            props: { color: "$gray0" },
          },
        },
        _dark: {
          _text: {
            color: "$textDark0",
            ":hover": {
              color: "$textDark0",
            },
            ":active": {
              color: "$textDark0",
            },
          },
          _icon: {
            color: "$textDark0",
            ":hover": {
              color: "$textDark0",
            },
            ":active": {
              color: "$textDark0",
            },
          },
          _spinner: {
            props: { color: "$textDark0" },
            ":hover": {
              props: { color: "$textDark0" },
            },
            ":active": {
              props: { color: "$textDark0" },
            },
          },
        },
      },
    },
    {
      action: "secondary",
      variant: "solid",
      value: {
        _text: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _icon: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _spinner: {
          props: { color: "$textLight0" },
          ":hover": {
            props: { color: "$textLight0" },
          },
          ":active": {
            props: { color: "$textLight0" },
          },
        },
        _dark: {
          _text: {
            color: "$textDark0",
            ":hover": {
              color: "$textDark0",
            },
            ":active": {
              color: "$textDark0",
            },
          },
          _icon: {
            color: "$textDark0",
            ":hover": {
              color: "$textDark0",
            },
            ":active": {
              color: "$textDark0",
            },
          },
          _spinner: {
            props: { color: "$textDark0" },
            ":hover": {
              props: { color: "$textDark0" },
            },
            ":active": {
              props: { color: "$textDark0" },
            },
          },
        },
      },
    },
    {
      action: "positive",
      variant: "solid",
      value: {
        _text: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _icon: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
          props: { color: "$textLight0" },
        },
        _spinner: {
          props: { color: "$textLight0" },
          ":hover": {
            props: { color: "$textLight0" },
          },
          ":active": {
            props: { color: "$textLight0" },
          },
        },

        _dark: {
          _text: {
            color: "$textDark0",
            ":hover": {
              color: "$textDark0",
            },
            ":active": {
              color: "$textDark0",
            },
          },
          _icon: {
            color: "$textDark0",
            ":hover": {
              color: "$textDark0",
            },
            ":active": {
              color: "$textDark0",
            },
          },
          _spinner: {
            props: { color: "$textDark0" },
            ":hover": {
              props: { color: "$textDark0" },
            },
            ":active": {
              props: { color: "$textDark0" },
            },
          },
        },
      },
    },
    {
      action: "negative",
      variant: "solid",
      value: {
        _text: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _icon: {
          color: "$textLight0",
          ":hover": {
            color: "$textLight0",
          },
          ":active": {
            color: "$textLight0",
          },
        },
        _spinner: {
          props: { color: "$textLight0" },
          ":hover": {
            props: { color: "$textLight0" },
          },
          ":active": {
            props: { color: "$textLight0" },
          },
        },
        _dark: {
          _text: {
            color: "$textDark0",
            ":hover": {
              color: "$textDark0",
            },
            ":active": {
              color: "$textDark0",
            },
          },
          _icon: {
            color: "$textDark0",
            ":hover": {
              color: "$textDark0",
            },
            ":active": {
              color: "$textDark0",
            },
          },
          _spinner: {
            props: { color: "$textDark0" },
            ":hover": {
              props: { color: "$textDark0" },
            },
            ":active": {
              props: { color: "$textDark0" },
            },
          },
        },
      },
    },
  ],

  props: {
    size: "md",
    variant: "solid",
    action: "primary",
  },

  _web: {
    ":focusVisible": {
      outlineWidth: "$0.5",
      outlineColor: "$primary7",
      outlineStyle: "solid",
      _dark: {
        outlineColor: "$primary300",
      },
    },
  },

  ":disabled": {
    opacity: 0.4,
  },
});
