import { Fragment } from "react";

const Input = ({
  label,
  type = "text",
  labelClass,
  inputClass,
  labelId,
  inputId,
  placeholder,
  value,
  maxLength,
  onChange,
  children,
}) => {
  const input = ["tel", "text", "email", "password", "number"];
  return (
    <Fragment>
      <label className={`${labelClass} form-label`} id={labelId}>
        {label}
      </label>
      {input.indexOf(type) !== -1 && (
        <input
          className={`${inputClass} form-control`}
          type={type}
          id={inputId}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          style={{ backgroundColor: "#f2f2f2", height: 50 }}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
      {type === "textarea" && (
        <textarea
          placeholder={placeholder}
          value={value}
          className={`${inputClass} form-control`}
          style={{ backgroundColor: "#f2f2f2" }}
          onChange={(e) => onChange(e.target.value)}
        ></textarea>
      )}
      {type === "select" && (
        <select
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} form-control`}
        >
          {Array.isArray(value) &&
            value.map((data, ind) => {
              return <option key={ind}>{data}</option>;
            })}
        </select>
      )}
    </Fragment>
  );
};
export default Input;
