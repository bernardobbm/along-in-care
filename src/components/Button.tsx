import { ReactNode, forwardRef } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { VariantProps, tv } from 'tailwind-variants'

const button = tv({
  base: 'flex-row items-center justify-center rounded-xl',
  variants: {
    color: {
      base: 'bg-gray-700',
      cancel: 'bg-red-600/80',
      confirm: 'bg-primary',
    },
    size: {
      base: 'w-36 h-12',
      lg: 'w-56 px-5 py-3',
    },
  },
  defaultVariants: {
    size: 'base',
    color: 'base',
  },
})

type ButtonProps = TouchableOpacityProps &
  VariantProps<typeof button> & {
    children?: ReactNode
    extraClasses?: string
  }

// eslint-disable-next-line react/display-name
export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ color, size, children, extraClasses, ...rest }, ref) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        className={button({ color, size, className: extraClasses })}
        ref={ref}
        {...rest}
      >
        {children}
      </TouchableOpacity>
    )
  },
)
