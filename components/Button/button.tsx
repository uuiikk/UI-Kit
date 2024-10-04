import React from 'react'

export interface ButtonProps {
	label?: string
	onClick?: () => void
	disable?: boolean
	width?: number
	height?: number
	backgroundColor?: string
	fontSize?: number
	fontColor?: string
	padding?: number
	margin?: number
	borderRadiusForAll?: boolean
	borderRadius?: number
	borderRadiusTopLeft?: number
	borderRadiusTopRight?: number
	borderRadiusBottomRight?: number
	borderRadiusBottomLeft?: number
	border?: boolean
	borderColor?: string
	borderWidth?: number
	borderStyle?: string
}

export const Button = ({
	disable = false,
	label,
	width,
	height,
	backgroundColor,
	fontSize,
	fontColor,
	borderRadiusForAll = true,
	borderRadius,
	borderRadiusTopLeft,
	borderRadiusTopRight,
	borderRadiusBottomRight,
	borderRadiusBottomLeft,
	padding,
	margin,
	border = false,
	borderWidth,
	borderStyle,
	borderColor,

	...props
}: ButtonProps) => {
	return (
		<button
			disabled={disable}
			style={{
				width: width + 'px',
				height: height + 'px',
				backgroundColor: backgroundColor,
				fontSize: fontSize + 'px',
				color: fontColor,
				borderRadius: borderRadiusForAll ? borderRadius + 'px' : 'none',
				borderTopLeftRadius: borderRadiusTopLeft + 'px',
				borderTopRightRadius: borderRadiusTopRight + 'px',
				borderBottomRightRadius: borderRadiusBottomRight + 'px',
				borderBottomLeftRadius: borderRadiusBottomLeft + 'px',
				padding: padding + 'px',
				margin: margin + 'px',
				border: border
					? `${borderWidth}px ${borderStyle} ${borderColor}`
					: 'none',
			}}
			{...props}
		>
			{label}
		</button>
	)
}
