<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Website Sitemap</title>
                <style>
                    body { font-family: Arial, sans-serif; margin: 20px; padding: 0; }
                    h1 { color: #333; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
                    th { background-color: #f4f4f4; }
                    a { text-decoration: none; color: #0073e6; }
                    a:hover { text-decoration: underline; }
                </style>
            </head>
            <body>
                <h1>Website Sitemap</h1>
                <table>
                    <tr>
                        <th>URL</th>
                    </tr>
                    <xsl:for-each select="s:urlset/s:url">
                        <tr>
                            <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
