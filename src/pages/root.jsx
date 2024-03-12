import { useKeycloak } from "@react-keycloak/web";
import React, { useEffect, useState } from "react";
import { Space, Spin } from "antd";

const RootPage = () => {
	const { keycloak } = useKeycloak();
	const [isLoading, setIsLoading] = useState(true); // Awalnya dalam keadaan loading

	useEffect(() => {
		keycloak.login({
			redirectUri: `${window.location.origin}/dashboard`,
		});

		// Simulasi waktu loading selama 2 detik
		setTimeout(() => {
			setIsLoading(false); // Setelah 2 detik, berhenti loading
		}, 2000);
	}, []);

	return (
		<Space>
			{isLoading ? (
				<Spin size="large" className="spinner" /> 
			) : null}
		</Space>
	);
};

export default RootPage;