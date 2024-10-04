import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from './button'

const meta: Meta<typeof Button> = {
	title: 'Компоненты/Кнопка',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	argTypes: {
		disable: { control: 'boolean', description: 'Выключена ли кнопка?' },
		onClick: {
			action: 'clicked',
			description: 'Функция, вызываемая при нажатии на кнопку',
		},
		label: {
			control: 'text',
			description: 'Содержимое, которое будет отображаться внутри кнопки',
		},
		width: { control: 'number', description: 'Ширина кнопки в пикселях' },
		height: {
			control: 'number',
			description: 'Высота кнопки в пикселях',
		},
		backgroundColor: {
			control: 'color',
			description: 'Цвет фона кнопки',
		},
		fontSize: { control: 'number', description: 'Размер шрифта кнопки' },
		fontColor: { control: 'color', description: 'Цвет шрифта кнопки' },
		padding: { control: 'number', description: 'Отступы внутри кнопки' },
		margin: { control: 'number', description: 'Отступы от кнопки' },
		borderRadiusForAll: {
			control: 'boolean',
			description: 'Применять скругление ко всем границам?',
		},
		borderRadius: {
			control: 'number',
			description: 'Радиус всех границ',
			if: { arg: 'borderRadiusForAll' },
		},
		borderRadiusTopLeft: {
			control: 'number',
			description: 'Радиус верхней левой границы',
			if: { arg: 'borderRadiusForAll', truthy: false },
		},
		borderRadiusTopRight: {
			control: 'number',
			description: 'Радиус верхней правой границы',
			if: { arg: 'borderRadiusForAll', truthy: false },
		},
		borderRadiusBottomRight: {
			control: 'number',
			description: 'Радиус нижней правой границы',
			if: { arg: 'borderRadiusForAll', truthy: false },
		},
		borderRadiusBottomLeft: {
			control: 'number',
			description: 'Радиус нижней левой границы',
			if: { arg: 'borderRadiusForAll', truthy: false },
		},
		border: { control: 'boolean', description: 'Контур?' },
		borderWidth: {
			control: 'number',
			description: 'Ширина контура',
			if: { arg: 'border' },
		},
		borderStyle: {
			control: 'select',
			options: ['solid', 'dotted', 'dashed', 'double', 'groove', 'ridge'],
			description: 'Стиль границы',
			if: { arg: 'border' },
		},
		borderColor: {
			control: 'color',
			description: 'Цвет границы',
			if: { arg: 'border' },
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	name: 'Кнопка по умолчанию',
	args: {
		disable: false,
		label: 'Кнопка',
		width: 200,
		height: 50,
		backgroundColor: '#5550c2',
		fontSize: 16,
		fontColor: '#ffffff',
		padding: 10,
		margin: 0,
		border: false,
		borderWidth: 2,
		borderColor: '#000000',
		borderStyle: 'solid',
		borderRadiusForAll: true,
		borderRadius: 10,
		borderRadiusTopLeft: 10,
		borderRadiusTopRight: 10,
		borderRadiusBottomRight: 10,
		borderRadiusBottomLeft: 10,
		onClick: action('Кнопка по умолчанию нажата'),
	},
}

export const Delete: Story = {
	name: 'Кнопка удалить',
	args: {
		disable: false,
		label: 'Удалить',
		width: 200,
		height: 50,
		backgroundColor: '#c53535',
		fontSize: 16,
		fontColor: '#ffffff',
		padding: 10,
		margin: 0,
		border: false,
		borderWidth: 2,
		borderColor: '#000000',
		borderStyle: 'solid',
		borderRadiusForAll: true,
		borderRadius: 10,
		borderRadiusTopLeft: 10,
		borderRadiusTopRight: 10,
		borderRadiusBottomRight: 10,
		borderRadiusBottomLeft: 10,
		onClick: action('Кнопка удалить нажата'),
	},
}

export const Outline: Story = {
	name: 'Контурная кнопка',
	args: {
		disable: false,
		label: 'Контур',
		width: 200,
		height: 50,
		backgroundColor: '#ffffff',
		fontSize: 16,
		fontColor: '#000000',
		padding: 10,
		margin: 0,
		border: true,
		borderWidth: 4,
		borderColor: '#5550c2',
		borderStyle: 'solid',
		borderRadiusForAll: true,
		borderRadius: 10,
		borderRadiusTopLeft: 10,
		borderRadiusTopRight: 10,
		borderRadiusBottomRight: 10,
		borderRadiusBottomLeft: 10,
		onClick: action('Кнопка удалить нажата'),
	},
}
