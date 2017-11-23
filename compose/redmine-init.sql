--
-- Data for Name: auth_sources; Type: TABLE DATA; Schema: public; Owner: redmine
--

COPY auth_sources (id, type, name, host, port, account, account_password, base_dn, attr_login, attr_firstname, attr_lastname, attr_mail, onthefly_register, tls, filter, timeout) FROM stdin;
1	AuthSourceLdap	LDAP	ldap	389	cn=admin,<%=ldapdc%>	<%=rootpassword%>	ou=people,<%=ldapdc%>	uid	givenName	sn	mail	t	f		\N
\.


--
-- Data for Name: settings; Type: TABLE DATA; Schema: public; Owner: redmine
--



