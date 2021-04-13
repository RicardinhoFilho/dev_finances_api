export function getResponseStatus(params: object[]): any {
  if (typeof params[1] == "number") {
    return (params[1]);
  } else {
    return 200;
  }
}
