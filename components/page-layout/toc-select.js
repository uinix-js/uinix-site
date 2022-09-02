import {Select} from '../ui/select.js';

export function TocSelect({toc, value, onChange}) {
  if (toc.length === 0) {
    return null;
  }

  const options = toc.map(({id, sections, text}) => {
    return {
      label: `[§${sections.join('.')}] ${text}`,
      value: id,
    };
  });

  return (
    <Select
      enableBlurOnChange
      enableNullValue
      options={options}
      placeholder="[§]"
      styles={componentStyles.override}
      title="View table of contents"
      value={value}
      onChange={onChange}
    />
  );
}

const componentStyles = {
  override: {
    appearance: 'none',
    border: 'none',
    color: 'text.link',
    fontSize: 'm',
  },
};
