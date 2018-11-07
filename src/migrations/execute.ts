import AccountMigration from './AccountMigration';
import CategoryMigration from './CategoryMigration';
import CommentMigration from './CommentMigration';
import PostMigration from './PostMigration';

export default function execute() {
    try {
        new AccountMigration();
        new CategoryMigration();
        new CommentMigration();
        new PostMigration();
    } catch (error) {
        console.log(error);
    }
}

// Execute migrations
execute();
