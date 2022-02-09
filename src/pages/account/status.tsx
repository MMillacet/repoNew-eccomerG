// application
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import AccountLayout from '../../components/account/AccountLayout';
import AccountPageStatus from '../../components/account/AccountPageStatus';

function Page() {
    return (
        <AccountLayout>
            <AccountPageStatus />
        </AccountLayout>
    );
}

export default withPageAuthRequired(Page);
