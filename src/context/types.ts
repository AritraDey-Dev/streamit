export const UPDATE_PEER = "UPDATE_PEER";
export const ADD_PEER = "ADD_PEER";
export const REMOVE_PEER = "REMOVE_PEER";

export type PeerAction =
  | { type: "UPDATE_PEER"; payload: string | null }
  | { type: "ADD_PEER"; payload: string }
  | { type: "REMOVE_PEER"; payload: string };

export const UPDATE_APP = "UPDATE_APP";

export interface IPeer {
    peerID : string | null,
    peersConnected : string[]
}

export interface IApp {
    page : String
}