import { MutationHookOptions, useMutation } from "@apollo/client";
import {
  CreateSubscriberMutationResponse,
  CreateSubscriberMutationVariables,
} from "src/@types/api";
import { CREATE_SUBSCRIBER_MUTATION } from "../mutations/create-subscriber";

export function useCreateSubscriberMutation(
  options?: Omit<
    MutationHookOptions<
      CreateSubscriberMutationResponse,
      CreateSubscriberMutationVariables
    >,
    "query"
  >,
) {
  return useMutation(CREATE_SUBSCRIBER_MUTATION, options);
}
