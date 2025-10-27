export {};

declare global {
  interface Window {
    watsonAssistantChatOptions?: {
      integrationID?: string;
      region?: string;
      serviceInstanceID?: string;
      clientVersion?: string;
      onLoad?: (instance: object) => Promise<void> | void;
      [key: string]: unknown;
    };
  }
}
