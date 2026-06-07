import { useDispatch } from "react-redux";

import { ApiDispatch } from "../Redux/store";

export const useAppDispatch = () => useDispatch<ApiDispatch>();