interface LoginDtoReq {
  username: string;
}

interface LoginDtoRes {
  accessToken: string;
  refreshToken: string;
}

export { LoginDtoReq, LoginDtoRes };
