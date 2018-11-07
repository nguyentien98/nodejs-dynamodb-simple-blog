import Migration from './Migration';
import PostModel from '../models/PostModel';

export default class PostMigration extends Migration {
    public table() {
        return new PostModel().getModel();
    };
}
