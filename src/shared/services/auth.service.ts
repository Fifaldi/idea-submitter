import {ILoginCredentials} from '@shared/interfaces';
import {from} from 'rxjs';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from '@core/firebase.config';

export default class AuthService {
    static login(data: ILoginCredentials) {
        return from(
            (async () =>
                (
                    await signInWithEmailAndPassword(auth, data.email, data.password)
                ).user.getIdToken())(),
        );
    }
    static logout() {
        return from((async () => await signOut(auth))());
    }
}
