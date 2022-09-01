import {Element} from './element.js';

export function Select({
  options,
  placeholder,
  shouldBlurOnChange,
  value,
  onChange,
  ...restProps
}) {
  const handleChange = (event) => {
    const select = event.target;
    const updatedValue = select.value;

    onChange(updatedValue === '' ? null : updatedValue);

    if (shouldBlurOnChange) {
      select.blur();
    }
  };

  return (
    <Element
      {...restProps}
      as="select"
      value={value === null ? '' : value}
      onChange={handleChange}
    >
      <option value="">{placeholder}</option>
      {options.map(({label, value}) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Element>
  );
}
