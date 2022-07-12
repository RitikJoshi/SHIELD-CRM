
export interface Account {
  monthlySalesGoal,
  quarterlySalesGoal,
  monthlyCustomersGoal,
  quarterlyCustomersGoal,
  monthlySalesCurrent,
  quarterlySalesCurrent,
  monthlyCustomersCurrent,
  quarterlyCustomersCurrent;
}

export interface ApiResponse {
  message: string;
  success: boolean;
}