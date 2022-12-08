import { Category } from '../../entities/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Promise<Category[]> {
    const categories = this.categoriesRepository.null;

    return categories;
  }
}

export { ListCategoriesUseCase };
