"use client";

import { useActionState } from "react";

import { searchCompany, type SearchState } from "@/app/api/actions";

import { CompanyData } from "./CompanyData";
import { CompanyHeader } from "./CompanyHeader";
import { EmptyState } from "./EmptyState";
import { ErrorMessage } from "./ErrorMessage";
import { TaxRegimeCard } from "./TaxRegimeCard";
import { SecondaryCnaes } from "./SecondaryCnaes";
import { LoadingSkeleton } from "./LoadingSkeleton";
import { ShareholderList } from "./ShareholderList";
import { STClassificationCard } from "./STClassificationCard";

const initialState: SearchState = {
	status: "idle",
	data: null,
	classification: null,
	message: "",
};

export default function SearchCompany() {
	const [state, formAction, isPending] = useActionState(
		searchCompany,
		initialState
	);

	return (
		<div className="w-full">
			<CompanyHeader formAction={formAction} isPending={isPending} />

			{isPending && <LoadingSkeleton />}

			{!isPending && state.status === "idle" && <EmptyState />}

			{!isPending && state.status === "error" && (
				<ErrorMessage message={state.message} />
			)}

			{!isPending && state.status === "success" && state.data && (
				<div className="space-y-4 sm:space-y-5 animate-fade-in">
					<div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
						{state.classification && (
							<STClassificationCard
								classification={state.classification}
								fiscalCnae={state.data.cnae_fiscal}
								fiscalCnaeDescription={state.data.cnae_fiscal_descricao}
							/>
						)}
						<TaxRegimeCard simplesNacional={state.data.opcao_pelo_simples} />
					</div>

					<CompanyData data={state.data} />

					<SecondaryCnaes cnaes={state.data.cnaes_secundarios} />

					<ShareholderList qsa={state.data.qsa} />
				</div>
			)}
		</div>
	);
}
