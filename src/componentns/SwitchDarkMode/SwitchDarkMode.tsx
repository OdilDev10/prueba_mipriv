import { useAppContext } from "../../context/AppContext";
import "./SwitchDarkMode.css";

export const SwitchDarkMode = ({
  handleDarkMode,
}: {
  handleDarkMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const { isDarkMode } = useAppContext();

  return (
    <div>
      <label>
        <input
          defaultChecked={isDarkMode}
          className="toggle-checkbox"
          type="checkbox"
          onChange={handleDarkMode}
        />
        <div className="toggle-slot">
          <div className="sun-icon-wrapper">
            <div
              className="iconify sun-icon"
              data-icon="feather-sun"
              data-inline="false"
            ></div>
          </div>
          <div className="toggle-button"></div>
          <div className="moon-icon-wrapper">
            <div
              className="iconify moon-icon"
              data-icon="feather-moon"
              data-inline="false"
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
};
