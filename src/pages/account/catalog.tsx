import { withPageAuthRequired } from '@auth0/nextjs-auth0';

// application
import AccountLayout from '../../components/account/AccountLayout';
import AccountPageCatalog from '../../components/account/AccountPageCatalog';

function Page() {
    return (
        <AccountLayout>
            <AccountPageCatalog />
        </AccountLayout>
    );
}

export default withPageAuthRequired(Page);
