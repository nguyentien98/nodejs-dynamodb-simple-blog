import Migration from './Migration';
import AccountModel from '../models/AccountModel';

export default class AccountMigration extends Migration {
    public table() {
        return new AccountModel().getModel();
    };
}
