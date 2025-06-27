interface refreshTokenDtoReq {
  refreshToken: string;
}

interface refreshTokenDtoRes {
  accessToken: string;
  refreshToken: string;
}

export { refreshTokenDtoReq, refreshTokenDtoRes };
