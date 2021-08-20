import { render, screen } from '@testing-library/react';
import AppButton from './AppButton';
import { ColorName } from '../../utils/style';

/**
 * Test specific color for AppButton
 * @param {string} colorName - name of the color, one of ColorName type
 * @param {string} [expectedClassName] - optional value to be found in className (color "true" may use "success" class name)
 * @param {boolean} [ignoreClassName] - optional flag to ignore className (color "inherit" doesn't use any class name)
 */
function testButtonColor(colorName: string, expectedClassName = colorName, ignoreClassName = false) {
  it(`supports "${colorName}" color`, async () => {
    let text = `${colorName} button`;
    await render(<AppButton color={colorName as ColorName}>{text}</AppButton>);

    let span = await screen.getByText(text); // <span> with specific text
    expect(span).toBeDefined();

    let button = await span.closest('button'); // parent <button> element
    expect(button).toBeDefined();
    // console.log('button.className:', button?.className)
    if (!ignoreClassName) {
      expect(button?.className?.includes(`makeStyles-${expectedClassName}`)).toBeTruthy(); // There is "makeStyles-[expectedClassName]-xxx" class
    }
  });
}

describe('AppButton component', () => {
  //   beforeEach(() => {});

  it('renders itself', async () => {
    let text = 'sample button';
    await render(<AppButton>{text}</AppButton>);
    let span = await screen.getByText(text);
    expect(span).toBeDefined();
    expect(span).toHaveTextContent(text);
    let button = await span.closest('button'); // parent <button> element
    expect(button).toBeDefined();
    expect(button).toHaveAttribute('type', 'button'); // not "submit" or "input" by default
  });

  testButtonColor('primary');
  testButtonColor('secondary');
  testButtonColor('error');
  testButtonColor('warning');
  testButtonColor('info');
  testButtonColor('success');
  testButtonColor('true');
  testButtonColor('false');

  testButtonColor('default');
  testButtonColor('inherit', 'default', true);

  it('supports className property', async () => {
    let text = 'button with specific class';
    let className = 'someClassName';
    await render(<AppButton className={className}>{text}</AppButton>);
    let span = await screen.getByText(text);
    expect(span).toBeDefined();
    let button = await span.closest('button'); // parent <button> element
    expect(button).toBeDefined();
    expect(button).toHaveClass(className);
  });

  it('supports label property', async () => {
    let text = 'button with label';
    await render(<AppButton label={text} />);
    let span = await screen.getByText(text);
    expect(span).toBeDefined();
    let button = await span.closest('button'); // parent <button> element
    expect(button).toBeDefined();
  });

  it('supports text property', async () => {
    let text = 'button with text';
    await render(<AppButton text={text} />);
    let span = await screen.getByText(text);
    expect(span).toBeDefined();
    let button = await span.closest('button'); // parent <button> element
    expect(button).toBeDefined();
  });
});
