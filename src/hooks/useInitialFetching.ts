import { useEffect } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { useSelector } from "react-redux";
import userSelectors from "@/redux/user/user-selectors";
import userOperations from "@/redux/user/user-operations";

const useInitialFetching = () => {
  const dispatch = useAppDispatch();
  const { user } = useSelector(userSelectors.rawUser);

  useEffect(() => {
    dispatch(userOperations.fetchUser());
  }, [dispatch]);

  useEffect(() => {
    if (!user) return;
  }, [dispatch, user]);
};

export default useInitialFetching;
