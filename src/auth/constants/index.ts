import { Options } from "check-password-strength";

export const PasswordStrengthOpts: Options<string> = [
  {
    id: 1,
    value: "Muy Debil",
    minDiversity: 0,
    minLength: 0
  },
  {
    id: 2,
    value: "Debil",
    minDiversity: 2,
    minLength: 6
  },
  {
    id: 3,
    value: "Medio",
    minDiversity: 4,
    minLength: 8
  },
  {
    id: 4,
    value: "Fuerte",
    minDiversity: 4,
    minLength: 10
  }
];
