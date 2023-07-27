import { BrowserRouter } from 'react-router-dom';
import { FunctionComponent } from 'react';
import { render, screen } from '@testing-library/react';
import AppLink, { AppLinkProps } from './';
import { randomColor } from '../../utils';

/**
 * AppLink wrapped with BrowserRouter
 */
const ComponentToTest: FunctionComponent<AppLinkProps> = (props) => (
  <BrowserRouter>
    <AppLink {...props} />
  </BrowserRouter>
);

/**
 * Tests for <AppLink/> component
 */
describe('<AppLink/> component', () => {
  it('renders itself', () => {
    const text = 'sample text';
    const url = 'https://example.com/';
    render(<ComponentToTest href={url}>{text}</ComponentToTest>);
    const link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
  });

  it('supports external link', () => {
    const text = 'external link';
    const url = 'https://example.com/';
    render(<ComponentToTest href={url}>{text}</ComponentToTest>);
    const link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('target', '_blank'); // Open external links in new Tab by default
    expect(link).toHaveAttribute('rel'); // For links opened in new Tab rel="noreferrer noopener" is required
    const rel = (link as any)?.rel;
    expect(rel.includes('noreferrer')).toBeTruthy(); // ref="noreferrer" check
    expect(rel.includes('noopener')).toBeTruthy(); // rel="noreferrer check
  });

  it('supports internal link', () => {
    const text = 'internal link';
    const url = '/internal-link';
    render(<ComponentToTest to={url}>{text}</ComponentToTest>);
    const link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });

  it('supports .openInNewTab property', () => {
    // External link with openInNewTab={false}
    let text = 'external link in same tab';
    let url = 'https://example.com/';
    render(
      <ComponentToTest href={url} openInNewTab={false}>
        {text}
      </ComponentToTest>
    );
    let link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');

    // Internal link with openInNewTab={true}
    text = 'internal link in new tab';
    url = '/internal-link-in-new-tab';
    render(
      <ComponentToTest to={url} openInNewTab>
        {text}
      </ComponentToTest>
    );
    link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveAttribute('href', url);
    expect(link).toHaveTextContent(text);
    expect(link).toHaveAttribute('target', '_blank'); // Open links in new Tab
    expect(link).toHaveAttribute('rel'); // For links opened in new Tab rel="noreferrer noopener" is required
    const rel = (link as any)?.rel;
    expect(rel.includes('noreferrer')).toBeTruthy(); // ref="noreferrer" check
    expect(rel.includes('noopener')).toBeTruthy(); // rel="noreferrer check
  });

  it('supports .className property', () => {
    let text = 'internal link with specific class';
    let url = '/internal-link-with-class';
    let className = 'someClassName';
    render(
      <ComponentToTest to={url} className={className}>
        {text}
      </ComponentToTest>
    );
    let link = screen.getByText(text);
    expect(link).toBeDefined();
    expect(link).toHaveClass(className);
  });

  it('supports .color property', () => {
    // Check several times with random colors
    for (let i = 1; i < 5; i++) {
      let text = `link #${i} with .color property`;
      let url = '/internal-link-with-color';
      let color = randomColor();
      render(
        <ComponentToTest to={url} color={color}>
          {text}
        </ComponentToTest>
      );
      let link = screen.getByText(text);
      expect(link).toBeDefined();
      expect(link).toHaveStyle(`color: ${color}`);
    }
  });

  it('supports .underline property', () => {
    // Enumerate all possible values
    ['hover', 'always', 'none'].forEach((underline) => {
      let text = `link with .underline == "${underline}"`;
      let url = '/internal-link-with-underline';
      render(
        <ComponentToTest to={url} underline={underline as any}>
          {text}
        </ComponentToTest>
      );
      let link = screen.getByText(text);
      expect(link).toBeDefined();
      underline === 'none'
        ? expect(link).toHaveStyle('text-decoration: none')
        : expect(link).toHaveStyle('text-decoration: underline');
      // TODO: make "hover" test with "mouse moving"
    });
  });
});
