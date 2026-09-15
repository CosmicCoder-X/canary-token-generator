// ©AngelaMos | 2026
// registry.go

package registry

import (
	"github.com/CosmicCoder-X/canary-token-generator/backend/internal/token"
	"github.com/CosmicCoder-X/canary-token-generator/backend/internal/token/generators"
	"github.com/CosmicCoder-X/canary-token-generator/backend/internal/token/generators/docx"
	"github.com/CosmicCoder-X/canary-token-generator/backend/internal/token/generators/envfile"
	"github.com/CosmicCoder-X/canary-token-generator/backend/internal/token/generators/kubeconfig"
	"github.com/CosmicCoder-X/canary-token-generator/backend/internal/token/generators/mysql"
	"github.com/CosmicCoder-X/canary-token-generator/backend/internal/token/generators/pdf"
	"github.com/CosmicCoder-X/canary-token-generator/backend/internal/token/generators/slowredirect"
	"github.com/CosmicCoder-X/canary-token-generator/backend/internal/token/generators/webbug"
)

type Config struct {
	BaseURL         string
	MySQLPublicHost string
	MySQLPublicPort int
}

type Registry map[token.Type]generators.Generator

func Build(cfg Config) Registry {
	host := cfg.MySQLPublicHost
	port := cfg.MySQLPublicPort
	var mysqlGen *mysql.Generator
	if host == "" || port == 0 {
		mysqlGen = mysql.New()
	} else {
		mysqlGen = mysql.NewWithAddress(host, port)
	}
	return Registry{
		token.TypeWebbug:       webbug.New(),
		token.TypeSlowRedirect: slowredirect.New(),
		token.TypeDocx:         docx.New(),
		token.TypePDF:          pdf.New(),
		token.TypeKubeconfig:   kubeconfig.New(),
		token.TypeEnvfile:      envfile.New(),
		token.TypeMySQL:        mysqlGen,
	}
}
