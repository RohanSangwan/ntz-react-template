import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { routesConfig } from "./router/routes";

test("Verify Login", async () => {
  const queryClient = new QueryClient();
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/login"],
  });

  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );

  const loginbutton = screen.getByText("Login");
  // simulate button click
  userEvent.click(loginbutton);

  // expect result
  await waitFor(() =>
    expect(screen.getByText("React Template")).toBeInTheDocument()
  );
});
