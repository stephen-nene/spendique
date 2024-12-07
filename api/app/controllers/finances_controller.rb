class FinancesController < ApplicationController
  before_action :set_finance, only: %i[ show update destroy ]

  # GET /finances
  def index
    @finances = Finance.all.page(params[:page])

    render json: { finances: @finances.map { |finance| FinanceSerializer.new(finance) }, meta: pagination_meta(@finances) }
  end

  # GET /finances/1
  def show
    render json: @finance, include_associations: true
  end

  # POST /finances
  def create
    @finance = Finance.new(finance_params)

    if @finance.save
      render json: @finance, status: :created, location: @finance
    else
      render json: @finance.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /finances/1
  def update
    if @finance.update(finance_params)
      render json: @finance
    else
      render json: @finance.errors, status: :unprocessable_entity
    end
  end

  # DELETE /finances/1
  def destroy
    @finance.destroy!
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_finance
    @finance = Finance.includes(:user, :categories).find_by(id: params[:id])
    if @finance.nil?
      render json: { error: "Finance not found with id=#{params[:id]}" }, status: :not_found
    end
  end

  # Only allow a list of trusted parameters through.
  def finance_params
    params.expect(finance: [:user_id, :title, :transaction_cost, :description, :transaction_type, :amount, recurring: {}])
  end

  def pagination_meta(finances)
    {
      total_count: finances.total_count,
      total_pages: finances.total_pages,
      next_page: finances.next_page,
      current_page: finances.current_page,
      per_page: finances.limit_value,
    }
  end
end
