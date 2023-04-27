function LoginCard() {
  return (
    <>
      <form className="container col-md-10 min-vh-100 d-flex align-items-center ">
        {" "}
        <div className="d-grid gap-2 col-6 mx-auto text-dark">
          <h1 className="text-center fs-2">Login Page</h1>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail Address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="esempio.figo@esempio.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pass" className="form-label">
              Password
            </label>
            <input type="password" id="pass" className="form-control" />
            <label htmlFor="pass" className="form-label">
              <a href="" className="link-primary">
                Forgot your password?
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-outline-primary mx-auto col-md-4"
          >
            Log in
          </button>
        </div>
      </form>
    </>
  );
}

export default LoginCard;
