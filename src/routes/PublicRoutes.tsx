import { Route, Switch } from 'react-router-dom';
import { Welcome, About, NotFound } from '../views';
import { PublicLayout } from './Layout';

/**
 * List of routes available only for anonymous users
 * Also renders the "Public Layout" composition
 */
const PublicRoutes = () => {
	return (
		<PublicLayout>
			<Switch>
				{/* <Route exact path="/" component={LoginRoutes} />
				<Route path="/auth" component={AuthRoutes} /> */}
				<Route path="/welcome" component={Welcome} />
				<Route path="/about" component={About} />,
				<Route component={NotFound} />
			</Switch>
		</PublicLayout>
	);
};

export default PublicRoutes;