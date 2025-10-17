import { Component } from "react";

import AuthRoutes from "./auth.routes";
import { View } from "react-native";

type RouteProps = Record<string, never>;

type RouteState = {
  loading: boolean;
  signed: boolean;
};

export class Routes extends Component<RouteProps, RouteState> {
  state: RouteState = {
    loading: false,
    signed: false,
  };

  render() {
    const signed = this.state.signed;

    return signed? <View></View> : <AuthRoutes />;
  }
}
