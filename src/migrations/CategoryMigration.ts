import Migration from './Migration';
import CategoryModel from '../models/CategoryModel';

export default class CategoryMigration extends Migration {
    public table() {
        return new CategoryModel().getModel();
    };
}
