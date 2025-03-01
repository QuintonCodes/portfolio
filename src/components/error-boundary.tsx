"use client";

import { Component } from "react";
import { toast } from "react-toastify";
import ErrorPage from "./error-page";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  error: Error | null;
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { error, hasError: true };
  }

  componentDidCatch(error: Error) {
    toast.error(`An unexpected error occurred: ${error}`);
  }

  resetError = () => this.setState({ error: null, hasError: false });

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) return <ErrorPage reset={this.resetError} />;

    return children;
  }
}
