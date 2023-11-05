import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';
function App() {
    return (
        <Router>
            <div className="App">
                {/* <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                </Routes> */}

                <Routes>
                    {publicRoutes.map((route, index) => {
                        // component : home , upload , profile ....
                        const Page = route.component;
                        // Layout mặc định trong layout
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            // nếu publicRoutes có prop layout thì lấy
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            // ngc lại lấy thẻ Fragment
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    // layout : nhận chidren
                                    <Layout>
                                        {/* nhận component Page là những components : home , profle .... */}
                                        <Page></Page>
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
