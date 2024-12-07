class CategoriesController < ApplicationController
  before_action :set_category, only: %i[ show update destroy ]

  # GET /categories
  def index
    @categories = Category.all.page(params[:page])
    render json: { categories: @categories.map { |category| CategorySerializer.new(category) }, meta: pagination_meta(@categories) }
  end

  # GET /categories/1
  def show
    render json: @category
  end

  # POST /categories
  def create
    @category = Category.new(category_params)

    if @category.save
      render json: @category, status: :created, location: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /categories/1
  def update
    if @category.update(category_params)
      render json: @category
    else
      render json: @category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /categories/1
  def destroy
    @category.destroy!
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_category
    @category = Category.find_by(id: params[:id])
  end

  # Only allow a list of trusted parameters through.
  def category_params
    params.expect(category: [:name, :status])
  end

  def pagination_meta(categories)
    {
      total_count: categories.total_count,
      total_pages: categories.total_pages,
      next_page: categories.next_page,
      current_page: categories.current_page,
      per_page: categories.limit_value,
    }
  end
end
