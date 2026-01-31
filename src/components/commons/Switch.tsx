import {
  Switch as AriaSwitch,
  type SwitchProps as AriaSwitchProps,
} from "react-aria-components";
import styles from "./Switch.module.css";

export interface SwitchProps extends Omit<AriaSwitchProps, "children"> {
  children: React.ReactNode;
}

export function Switch({ children, ...props }: SwitchProps) {
  return (
    <AriaSwitch {...props} className={styles["react-aria-Switch"]}>
      {({ isSelected, isDisabled }) => (
        <>
          <div className={`${styles.track} ${styles.indicator}`}>
            <div
              data-disabled={isDisabled || undefined}
              className={
                isSelected
                  ? styles.handle
                  : `${styles.handle} ${styles.indicator}`
              }
            />
          </div>
          {children}
        </>
      )}
    </AriaSwitch>
  );
}
