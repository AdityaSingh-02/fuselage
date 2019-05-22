import React from 'react';
import { action } from '@storybook/addon-actions';
import centered from '@storybook/addon-centered/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Button } from './Button';


const buttonText = 'Powered by Rocket.Chat';

storiesOf('Components|Button', module)
  .addDecorator(withInfo)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addParameters({ jest: ['Button'] })
	.add('default', () => (
		<Button
			disabled={boolean('disabled', false)}
			outline={boolean('outline', false)}
			nude={boolean('nude', false)}
			danger={boolean('danger', false)}
			secondary={boolean('secondary', false)}
			stack={boolean('stack', false)}
			small={boolean('small', false)}
			onClick={action('clicked')}
		>
			{text('text', buttonText)}
		</Button>
	))
	.add('disabled', () => (
		<Button
			disabled={boolean('disabled', true)}
			outline={boolean('outline', false)}
			nude={boolean('nude', false)}
			danger={boolean('danger', false)}
			secondary={boolean('secondary', false)}
			stack={boolean('stack', false)}
			small={boolean('small', false)}
			onClick={action('clicked')}
		>
			{text('text', buttonText)}
		</Button>
	))
	.add('outline', () => (
		<Button
			disabled={boolean('disabled', false)}
			outline={boolean('outline', true)}
			nude={boolean('nude', false)}
			danger={boolean('danger', false)}
			secondary={boolean('secondary', false)}
			stack={boolean('stack', false)}
			small={boolean('small', false)}
			onClick={action('clicked')}
		>
			{text('text', buttonText)}
		</Button>
	))
	.add('nude', () => (
		<Button
			disabled={boolean('disabled', false)}
			outline={boolean('outline', false)}
			nude={boolean('nude', true)}
			danger={boolean('danger', false)}
			secondary={boolean('secondary', false)}
			stack={boolean('stack', false)}
			small={boolean('small', false)}
			onClick={action('clicked')}
		>
			{text('text', buttonText)}
		</Button>
	))
	.add('danger', () => (
		<Button
			disabled={boolean('disabled', false)}
			outline={boolean('outline', false)}
			nude={boolean('nude', false)}
			danger={boolean('danger', true)}
			secondary={boolean('secondary', false)}
			stack={boolean('stack', false)}
			small={boolean('small', false)}
			onClick={action('clicked')}
		>
			{text('text', buttonText)}
		</Button>
	))
	.add('secondary', () => (
		<Button
			disabled={boolean('disabled', false)}
			outline={boolean('outline', false)}
			nude={boolean('nude', false)}
			danger={boolean('danger', false)}
			secondary={boolean('secondary', true)}
			stack={boolean('stack', false)}
			small={boolean('small', false)}
			onClick={action('clicked')}
		>
			{text('text', buttonText)}
		</Button>
	))
	.add('stack', () => (
		<Button
			disabled={boolean('disabled', false)}
			outline={boolean('outline', false)}
			nude={boolean('nude', false)}
			danger={boolean('danger', false)}
			secondary={boolean('secondary', false)}
			stack={boolean('stack', true)}
			small={boolean('small', false)}
			onClick={action('clicked')}
		>
			{text('text', buttonText)}
		</Button>
	))
	.add('small', () => (
		<Button
			disabled={boolean('disabled', false)}
			outline={boolean('outline', false)}
			nude={boolean('nude', false)}
			danger={boolean('danger', false)}
			secondary={boolean('secondary', false)}
			stack={boolean('stack', false)}
			small={boolean('small', true)}
			onClick={action('clicked')}
		>
			{text('text', buttonText)}
		</Button>
	))
	.add('loading', () => (
		<Button
			disabled={boolean('disabled', false)}
			outline={boolean('outline', false)}
			nude={boolean('nude', false)}
			danger={boolean('danger', false)}
			secondary={boolean('secondary', false)}
			stack={boolean('stack', false)}
			small={boolean('small', false)}
			loading={boolean('loading', true)}
			onClick={action('clicked')}
		>
			{text('text', buttonText)}
		</Button>
	));