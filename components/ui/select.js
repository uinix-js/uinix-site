import {Element} from './element.js';

export function Select({
  enableBlurOnChange,
  enableNullValue,
  options,
  placeholder,
  value,
  onChange,
  ...restProps
}) {
  const handleChange = (event) => {
    const select = event.target;
    const updatedValue = select.value;

    if (enableNullValue) {
      onChange(updatedValue === '' ? null : updatedValue);
    } else {
      onChange(updatedValue);
    }

    if (enableBlurOnChange) {
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
      {enableNullValue && <option value="">{placeholder}</option>}
      {options.map(({label, value}) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </Element>
  );
}
