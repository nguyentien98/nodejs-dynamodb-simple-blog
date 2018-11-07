import Migration from './Migration';
import CommentModel from '../models/CommentModel';

export default class CommentMigration extends Migration {
    public table() {
        return new CommentModel().getModel();
    };
}
