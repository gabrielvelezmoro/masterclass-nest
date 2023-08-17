export abstract class FriendRepository {
  abstract create(name: string, frindFunction: string): Promise<void>;
}
